var fs = require('fs');


var prices = fs.readFileSync('prices.txt','utf8')

console.log(prices)


/////////////////////////////////////

const schedule = require('node-schedule')


const dateVal = new Date('2024-06-02T22:34:00.000+5:30')

function reReadPrices(){

prices  = fs.readFileSync('prices.txt','utf8')


}


///////////////////////////////////////////////////

var newPrices = [];

const puppeteer = require('puppeteer');

async function getWillysGurka() {


    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto("https://www.willys.se/produkt/Gurka-Sverige-Klass-1-100594965_ST", {'waitUntil' : 'domcontentloaded'})

    await page.waitForSelector('#__next > div.sc-504002c3-0.cvLlnT.__className_5fe6d7.__className_b41963.__className_d7eab4.__className_1ef194 > div.sc-504002c3-3.ePiOKs > main > section > div:nth-child(2) > div > div > div.sc-a5c0d994-3.jLNPia > div.sc-888dbee5-0.dfQgxu > div.sc-888dbee5-1.ehwQfV > div > div.sc-888dbee5-8.eteRZv > div > div > span.sc-5d1203b2-2.ZyTRj', {
        visible: true,
      });

    const element = await page.waitForSelector('#__next > div.sc-504002c3-0.cvLlnT.__className_5fe6d7.__className_b41963.__className_d7eab4.__className_1ef194 > div.sc-504002c3-3.ePiOKs > main > section > div:nth-child(2) > div > div > div.sc-a5c0d994-3.jLNPia > div.sc-888dbee5-0.dfQgxu > div.sc-888dbee5-1.ehwQfV > div > div.sc-888dbee5-8.eteRZv > div > div > span.sc-5d1203b2-2.ZyTRj'); // select the element
    const value = await element.evaluate(el => el.textContent);




    const element2 = await page.waitForSelector('#__next > div.sc-504002c3-0.cvLlnT.__className_5fe6d7.__className_b41963.__className_d7eab4.__className_1ef194 > div.sc-504002c3-3.ePiOKs > main > section > div:nth-child(2) > div > div > div.sc-a5c0d994-3.jLNPia > div.sc-888dbee5-0.dfQgxu > div.sc-888dbee5-1.ehwQfV > div > div.sc-888dbee5-8.eteRZv > div > div > div > span.sc-5d1203b2-5.bXgHuu'); // select the element
    const value2 = await element2.evaluate(el => el.textContent);
  
    var newWillyPrice = 'Willys Gurka: ' +  value + ',' + value2 + ' kr'
  

    browser.close();

      newPrices.push(newWillyPrice  + ' %s ++')


}

async function getCoopGurka() {


    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto("https://www.coop.se/handla/varor/frukt-gronsaker/gronsaker/gurka/gurka-styck-7300156587718", {'waitUntil' : 'domcontentloaded'})

    await page.waitForSelector('#reactMicroApp > div > div > div.Grid-cell.Grid-cell--grownWidth.u-block > div > div.Grid > div.Grid-cell.u-marginBxlg > article > div > div.ItemInfo-details > div:nth-child(1) > div > div.ItemInfo-cta > div > span > span:nth-child(1)', {
        visible: true,
      });

    const element = await page.waitForSelector('#reactMicroApp > div > div > div.Grid-cell.Grid-cell--grownWidth.u-block > div > div.Grid > div.Grid-cell.u-marginBxlg > article > div > div.ItemInfo-details > div:nth-child(1) > div > div.ItemInfo-cta > div > span > span:nth-child(1)'); // select the element
    const priceCoop = await element.evaluate(el => el.textContent);
  
  
    browser.close();

    newPrices.push( 'Coop Gurka: ' + priceCoop + ' kr'  + ' %s ++')

}

async function getIcaGurka() {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto("https://handlaprivatkund.ica.se/stores/1004219/products/gurka-styck-klass-1/1470037", {'waitUntil' : 'domcontentloaded'})

    await page.waitForSelector('#main > div > div:nth-child(3) > div > div.flex__Flex-sc-mmemlz-0.bnOucB._box_12ac1_1 > div.flex__Flex-sc-mmemlz-0.imNnbZ > span', {
        visible: true,
      });

    const element = await page.waitForSelector('#main > div > div:nth-child(3) > div > div.flex__Flex-sc-mmemlz-0.bnOucB._box_12ac1_1 > div.flex__Flex-sc-mmemlz-0.imNnbZ > span'); // select the element
    const priceIca = await element.evaluate(el => el.textContent);
  
  
    browser.close();

    newPrices.push( 'Ica Maxi Gurka: ' + priceIca  + ' %s ++')

}

async function getHemopgurka() {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    await page.goto("https://www.hemkop.se/produkt/Gurka-Sverige-Klass-1-100594965_ST", {'waitUntil' : 'domcontentloaded'})

    await page.waitForSelector('#modal-container > div.sc-6f582817-0.eJrKJd > div > div.sc-f17b1476-0.jpeXlq > div.sc-f17b1476-1.ghVfVr > div.sc-f17b1476-7.fEAYMa > div.sc-f17b1476-4.lobtkW > div.sc-94a42247-0.ePMiJE > div > div > p > span:nth-child(1)', {
        visible: true,
      });

    const element = await page.waitForSelector('#modal-container > div.sc-6f582817-0.eJrKJd > div > div.sc-f17b1476-0.jpeXlq > div.sc-f17b1476-1.ghVfVr > div.sc-f17b1476-7.fEAYMa > div.sc-f17b1476-4.lobtkW > div.sc-94a42247-0.ePMiJE > div > div > p > span:nth-child(1)'); // select the element
    const pricehomekop = await element.evaluate(el => el.textContent);
  
  
    browser.close();

    newPrices.push( "Hemköp Gurka: " + pricehomekop + ' kr' + ' %s ')

}

async function scrapePuppet(){

    newPrices = []

   await getWillysGurka()

   await getCoopGurka()

   await getIcaGurka()

   await getHemopgurka()


   let regPrices = newPrices.toString().replace(/\[/g,"").replace(/\]/g,"").replace(/\++,/g,"")
   
   fs.writeFileSync('prices.txt', JSON.stringify(regPrices))

   reReadPrices()

}




async function ScraperMain() {


    schedule.scheduleJob('0 9 * * *', ()=>{

        
        scrapePuppet()

        console.log("scheduel....")

    })

}

///////////////////////////////////




var http = require('http');

const PORT=3000; 

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});

console.log("")


///////////////////////////////////

require('dotenv').config();


const Discord = require("discord.js")

const client = new Discord.Client({
    intents: ["GUILDS","GUILD_MESSAGES","GUILD_MEMBERS","MESSAGE_CONTENT"],
    partials: ["CHANNEL", "MESSAGE"]
}   


)

ScraperMain()

let m = prices.replace(/\[/g,"").replace(/\]/g,"")

console.log(m)

/*


client.on("ready", (x)=>{

console.log("Has logged in")

})

function parse(str) {


    let ech = str.replace(/%s/g, '\n');


      return ech

}

client.on('messageCreate', async (message) => {

    if(message.content.toLowerCase() == "!gurka"){


        let stuff = parse(prices, '\n')


        let m = stuff.replace(/\"/g,"").replace(/\"/g,"")
          
        message.reply(m)


    }
})

client.login(process.env.BOT_PASS)

*/
///////////////////////////////////////////



