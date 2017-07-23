import { Injectable } from '@angular/core';

@Injectable()
export class CodeBean
{
    private idCode: string;
    private idDateTime: Date;

    constructor() {
    }

    public getIdCode() : string
    {
        return this.idCode
    }

    public setIdCode(code: string) : void
    {
        this.idCode = code;
    }

    public getIdDate() : Date
    {
        return this.idDateTime;
    }

    public setIdDate(dt : Date) : void
    {
        this.idDateTime = dt;
    }
}