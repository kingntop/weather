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


    const codes = await getUidAll();
                     
    for (const code of codes) {
        
        await page.waitForTimeout(1000)
        await page.goto('https://apis.data.go.kr/1360000/FmlandWthrInfoService/getDayStatistics?serviceKey=Ftc5zAmQ%2Bb5K0AP1QK6GXUMdlwSvuNRi6NPKLQpWtVcQX8cwtV8NH9sBolffopz2vMxQTNslqFtZX8u1%2Be7qVA%3D%3D' +
        '&pageNo=1&numOfRows=100&dataType=JSON&ST_YMD='+yesterdayDB+'&ED_YMD='+yesterdayDB+'&AREA_ID='+ code.ID+ '&PA_CROP_SPE_ID=' + code.IID);
        const  data = JSON.parse(await page.$eval('body > pre', el => el.textContent.trim()));
        if (data.hasOwnProperty('response.body.items.item') ) {
            console.log('a')
        }
        const posts = data.response.body.items.item;
        for (const post of posts) {
            console.log(post)
            postApex(post)
        }

    }

    // console.log(posts)

});
