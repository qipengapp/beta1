import { Injectable, Inject, Component } from '@angular/core';
import { Loading, Toast, Alert, NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { HttpService } from "../../service/http.service";

@Injectable()
export class AddressService {

    constructor(private httpService: HttpService) {
    }

    getCitiesData() {
        return this.httpService.get('./assets/data/city-data.json', null);
    }



}