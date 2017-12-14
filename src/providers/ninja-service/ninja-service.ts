import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Ninja} from "../../model/ninja";
import {of} from "rxjs/observable/of";
import {catchError, tap} from "rxjs/operators";

/*
  Generated class for the NinjaServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NinjaServiceProvider {

    private rootURL = "https://rest-api-ninja.herokuapp.com/api";

    httpOptions = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
    };


    constructor(public http: HttpClient) {
        console.log('Hello NinjaServiceProvider Provider');
    }

    getNinjas():Observable<Ninja[]>{
        return this.http.get<Ninja[]>(this.rootURL+"/ninjas").pipe(
          tap(ninjas=>this.log(`Fetched Ninjas`)),
          catchError(this.handleError('Get Ninja',[]))
        );
    }


    private log(message: String ){
        console.log("Log: "+message);
    }



    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */

    private handleError<T>(operation='operation', result?:T){
        return (error: any ): Observable<T> => {
            // TODO: send the error to remote logging infrastructure

            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption

            this.log(`${operation} failed: ${error.message}`);

            //let the app keep running by returning an empty result

            return of(result as T);
        };
    }


}
