# sleep-while
while, will slower, sleep

 ### Slow Sleep While
 
   - While döngünüzün daha yavaş olmasını istiyorsanız bu kodu kullanmalısın.
    
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const action = async () => {
        for (let i = 1; i < 10; i++) {
            console.log(`turn ${i}`)
            console.log('Waiting for 500ms')
            await sleep(500)
        }
    }
    action()
   
   - Aşağıdaki kod bloğunu olduğu gibi kodunuzun içine kopyalayın, değiştirmeden!;
   
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    
   - Kopyalamayı yaptıysanız geriye while yada for döngünüzü uyutmak kalıyor.
   - Döngünüzü uyutmak için <code>async function(){}</code> kullanmalısın.
   
    const action = async () => {
        while (i < 10) {
            i += 1;
            console.log(`turn ${i}`)
            console.log('Waiting for 500ms')
            await sleep(500)
        }
    }
    
   - Geriye son bir şey kaldı, <code>await sleep()</code> bu kod bloğunu döngünüzün nerede yavaşlamasını istiyorsanız oraya koyabilirsin. Evet! birden fazla koyabilirsin.
   - Biraz daha detay istersen <code>sleep()</code> içerisine milisaniye cinsinden yazmalısın eğer bunu istersen, (ms) yazan kısıma (s) saniye olarak değiştirmiş olursun.
    
    
   
