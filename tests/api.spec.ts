import {
    test,
    expect,
    request

} from '@playwright/test';

import * as playwright from 'playwright' 

import {
    yesterday,
    yesterdayDB
} from "./common/utils";
import {
    getUid,
    postApex,
    getUidAll
} from "./common/apex";

test('should create a bug report', async ({ page }) => {

    await page.goto('https://apis.data.go.kr/1360000/FmlandWthrInfoService/getDayStatistics?serviceKey=Ftc5zAmQ%2Bb5K0AP1QK6GXUMdlwSvuNRi6NPKLQpWtVcQX8cwtV8NH9sBolffopz2vMxQTNslqFtZX8u1%2Be7qVA%3D%3D&pageNo=1&numOfRows=100&dataType=JSON&ST_YMD=20220804&ED_YMD=20220804&AREA_ID=4122000000&PA_CROP_SPE_ID=PA130201');
    
    const  data = JSON.parse(await page.$eval('body > pre', el => el.textContent.trim()));

    console.log(data)

    // console.log(posts)

});
