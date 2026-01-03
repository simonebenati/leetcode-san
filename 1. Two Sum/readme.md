# Ragionamento

## Soluzione iniziale
Anche qui credo che la soluzione sia quella di fissare 1 numero e iterare rispetto ai successivi.  

**O(n^2)**

32ms.  
Questo risultato e' estremamente lento.

```js
var twoSum = function(nums, target) {
    for (let x = 0; x < nums.length; ++x) {
        for (let y = x + 1; y < nums.length; ++y) {
            if(nums[x] + nums[y] === target)
                return [x,y]
        }
    }
};
```

## Possibile ottimizzazione con secondo array
Potenzialmente e' possibile escludere quei valori > target creando un secondo array.  

Ma nel worst case non velocizzerebbe anzi, rallenterebbe a **O(n^2+n)**.  

Quindi non e' un ottimizzazione percorribile non conoscendo il dataset a priori.

## Idea con ordinamento e due indici
Mi viene in mente di ordinare l'array da grande vs piccolo e poi:

- if target - (min+max) > target  
  decrease index of max
- else if target - (min+max) < target  
  increase min

In questo modo con un ciclo while riesco a gestire i due indici riducendo a **O(N+N)**.

## Problema dell'indicizzazione
Non percorribile poiche' bisogna mantenere l'indicizzazione originale.  

Potenzialmente ora, aggiungendo un find di questi valori sull'array originale potrei ritornare il posizionale...  
ma diventa un **O(4N)** ⇒ non percorribile poiche' potenzialmente due indici possono avere lo stesso valore!

```js
var twoSum = function(nums, target) {
    let x = 0;
    let y = nums.length - 1
    let sum;
    sortedArray = nums.sort((a,b) => a - b);
    while (true) {
        sum = (nums[x] + nums[y])
        if (sum > target) {
            --y;
        }
        else if (sum < target) {
            ++x;
        }
        else {
            return[x,y]
        }
    }
};
```


## Soluzione finale
Dopo circa **7 ore di lavoro tira e molla** sono arrivato alla seguente **O(2N)** soluzione **8ms**.

```js
var twoSum = function(nums, target) {
    let goal;
    let object = {};
    for (let x = 0; x < nums.length; ++x) {
        object[target - nums[x]] = x
    };

    for (x = 0; x < nums.length; ++x) {
        if (object[nums[x]] && object[nums[x]] !== x) {
            return [x, object[nums[x]]]
        }
    }
};
```
