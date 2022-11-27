import { AxiosInstance, AxiosRequestConfig } from "axios"

export default class AxiosConfig {

	constructor(private _axios: AxiosInstance) {
		this._axios.interceptors.request.use(
			async (cfg): Promise<AxiosRequestConfig> => {
				return {
					...cfg,
					withCredentials: true,
					headers: {
						"X-Accept-Cookie": "true",
						...cfg.headers,
					},
				}
			}
		)
	}

}
