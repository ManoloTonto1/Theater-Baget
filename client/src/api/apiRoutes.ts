/**
 * donate website
 *
 * @url {"https://ikdoneer.azurewebsites.net/api/donatie/"}
 * @body {Email string, Hoeveelheid number, Doel string, Tekst string}
 */
export const postDonation = 'https://ikdoneer.azurewebsites.net/api/donatie/';
const postPay = 'https://fakepay.azurewebsites.net/';
export const getCharities = 'https://ikdoneer.azurewebsites.net/api/goededoelen/';
import type {
	AxiosResponse
} from 'axios';
import axios from 'axios';

/**
 * Bearer token for authorization
 *
 * @type {{ 'Content-Type': string; Authorization: string; }}
 */
const BearerToken = {
	'Access-Control-Allow-Origin':'*',
	'Content-Type': 'application/json',
	Authorization: `Bearer ${localStorage.getItem('token')}`
};
/**
 * Data Generic
 *
 * @typedef {Data}
 * @template T
 */
export type Data<T> = {
    [key: string]: T
} 
/**
 * Chooses the api route depending on the context of the application.
 *
 * @type {("/api" | "{cloud provider link}")}
 */
const apiEndPoint = import.meta.env.MODE === 'development' ?
	'/api'
	: 'https://theater-baget-t24oktgp5q-ew.a.run.app/api';

/**
 * The module of the api route
 * @example customers, items, employees
 * @interface ApiModule
 * @typedef {ApiModule}
 */
interface ApiModule {
    /**
     * The route
     *
     * @type {string}
     */
    route: string
    /**
     * Get a single document, might be by id ot just a normal get.
     *
     * @param {?string} [id]
     * @returns {Promise<AxiosResponse<any, any>>}
     */
    Get(id?: string): Promise<AxiosResponse<any, any>>
    // eslint-disable-next-line max-len
    /**
     * Get all the documents given a limit.
     * @returns {Promise<AxiosResponse<any, any>>}
     */
    GetAll():
        Promise<AxiosResponse<any, any>>
    /**
     * total rows on the selected module.
     *
     * @returns {Promise<AxiosResponse<any, any>>}
     */
    TotalRows(): Promise<AxiosResponse<any, any>>
    /**
     * Update a document Given an id and module data.	 
     * 
     * @param {string} id
     * @param {Data<unknown>} data
     * @returns {Promise<AxiosResponse<any, any>>}
     */
    Update(id: string, data: any): Promise<AxiosResponse<any, any>>
    /**
     * Description placeholder
     *
     * @param {Data<unknown>} data
     * @returns {Promise<AxiosResponse<any, any>>}
     */
    Create(data: Data<unknown> | any): Promise<AxiosResponse<any, any>>
}

interface ExternalModule {
    Donate(Email: string, Hoeveelheid: number, Doel: number, Tekst: string): Promise<AxiosResponse<any, any>>;
	Pay(amount: number, reference: string, url:string): Promise<AxiosResponse<any, any>>;
}

/**
 * The API is used to connect to the CRUD endpoints to an external api specified by the user in this file 
 *
 * @param {string} route
 * @returns {ApiModule}
 */
const API = <T extends string>(route: T): T extends 'external' ? ExternalModule : ApiModule => {
	const ApiModule: ApiModule = {
		route: '',
		Get: async (id?: string) => {
			return axios({
				headers: BearerToken,
				method: 'GET',
				url: id ? ApiModule.route + id : ApiModule.route
			});
		},
		GetAll: async () => {
			return axios({
				headers: BearerToken,
				method: 'GET',
				url: `${ApiModule.route}`
			});
		},
		TotalRows: async (): Promise<AxiosResponse<any, any>> => {
			return axios({
				headers: BearerToken,
				method: 'GET',
				url: ApiModule.route + 'count'
			});
		},
		Update: async (id: string, data: Data<unknown> | unknown): Promise<AxiosResponse<any, any>> => {
			return axios({
				method: 'PUT',
				url: ApiModule.route + id,
				headers: BearerToken,
				data: data
			});
		},
		Create: async (data: Data<unknown> | unknown): Promise<AxiosResponse<any, any>> => {
			return axios({
				method: 'POST',
				headers: BearerToken,
				url: ApiModule.route,
				data: data
			});
		},

	};
	const DonateModule: ExternalModule = {
		Donate: async (Email:string,Hoeveelheid:number,Doel:number,Tekst:string): Promise<AxiosResponse<any, any>> => {
			return axios({
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${import.meta.env.VITE_DONATE_TOKEN}`
				},
				url: postDonation,
				data: {
					Email,
					Hoeveelheid,
					Doel,
					Tekst
				}
			});
		},
		Pay: async (amount: number, reference: string, url:string): Promise<AxiosResponse<any, any>> => {
			return axios({
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				url: postPay,
				data: {
					amount,
					reference,
					url
				}
			});
		},
	};
    
	if (route === 'external') {
		return DonateModule as any;
	}
	ApiModule.route = apiEndPoint + '/' + route + '/';
	return ApiModule as any;

};

export default API;