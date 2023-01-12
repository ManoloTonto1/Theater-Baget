/**
 * donate website
 *
 * @url {"https://ikdoneer.azurewebsites.net/api/donatie/"}
 * @body {Email string, Hoeveelheid number, Doel string, Tekst string}
 */
export const postDonation = 'https://ikdoneer.azurewebsites.net/api/donatie/';
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
const apiEndPoint = import.meta.env.MODE === 'development' ? '/api' : '';

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
    Create(data: Data<unknown> | any,requestType?: string): Promise<AxiosResponse<any, any>>
}

interface DonateModule {
    Donate(Email: string, Hoeveelheid: number, Doel: number, Tekst: string): Promise<AxiosResponse<any, any>>;
}

/**
 * The API is used to connect to the CRUD endpoints to an external api specified by the user in this file 
 *
 * @param {string} route
 * @returns {ApiModule}
 */
const API = <T extends string>(route: T): T extends 'donate' ? DonateModule : ApiModule => {
	const ApiModule: ApiModule = {
		route: '',
		Get: (id?: string) => {
			return axios({
				headers: BearerToken,
				method: 'GET',
				url: id ? ApiModule.route + id : ApiModule.route
			});
		},
		GetAll: () => {
			return axios({
				headers: BearerToken,
				method: 'GET',
				url: `${ApiModule.route}`
			});
		},
		TotalRows: (): Promise<AxiosResponse<any, any>> => {
			return axios({
				headers: BearerToken,
				method: 'GET',
				url: ApiModule.route + 'count'
			});
		},
		Update: (id: string, data: Data<unknown> | unknown): Promise<AxiosResponse<any, any>> => {
			return axios({
				method: 'PUT',
				url: ApiModule.route + id,
				headers: BearerToken,
				data: data
			});
		},
		Create: (data: Data<unknown> | unknown, requestType?: string): Promise<AxiosResponse<any, any>> => {
			let headers = BearerToken;

			if (requestType === 'excel') {
				headers = {
					'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
					Authorization: BearerToken.Authorization
				};
			}
			
			return axios({
				method: 'POST',
				headers: headers,
				url: ApiModule.route,
				data: data
			});
		},

	};
	const DonateModule: DonateModule = {
		Donate: (Email:string,Hoeveelheid:number,Doel:number,Tekst:string): Promise<AxiosResponse<any, any>> => {
			return axios({
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${import.meta.env.VITE_DONATE_TOKEN}`
				},
				url: ApiModule.route,
				data: {
					Email,
					Hoeveelheid,
					Doel,
					Tekst
				}
			});
		},
	};
    
	if (route === 'donate') {
		ApiModule.route = postDonation;
		return DonateModule as any;
	}
	ApiModule.route = apiEndPoint + '/' + route + '/';
	return ApiModule as any;

};

export default API;