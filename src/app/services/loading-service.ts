import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class LoadingService {
	private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	loading$: Observable<boolean> = this._loading$.asObservable();
	
	constructor() {}

	loadingOn() {
		setTimeout(() => this._loading$.next(true))
	}

	loadingOff() {
		this._loading$.next(false);
	}
}