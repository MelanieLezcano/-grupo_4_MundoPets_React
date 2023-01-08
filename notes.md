 let productos =[
            {
            id : 1,
            imgPrincipal :  'royal-canin-Gato-kitten--removebg-preview.png',
            nombre :'Royal Canin Kitten 10kg',
            descuento :20,
            precio:  15000
            },
            {
            id : 2,
            imgPrincipal :  'gk-agility-Gato-kitten-removebg-preview.png',
            nombre :'Agility Kitten 5kg',
            descuento :20,
            precio:  8000
            },
            {
            id : 3,
            imgPrincipal :  'gk-balanced-Gato-kitten-75kg-removebg-preview.png',
            nombre :'VitalCan Balanced Kitten 7.5kg',
            descuento :10,
            precio:  7500
            },
            {
            id : 4,
            imgPrincipal :  'gk-excellent-gatito-kitten-75kg-removebg-preview.png',
            nombre :'Excellent Kitten 7.5kg',
            descuento :20,
            precio:  7800
            },
            {
            id : 5,
            imgPrincipal : 'gk-complete-Gato-kitten-75kg-removebg-preview.png',
            nombre :'VitalCan Complete Kitten 7.5kg',
            descuento :20,
            precio:  8000
            },
            {
            id : 6,
            imgPrincipal : 'ga-agility-Gato-adulto-removebg-preview.png',
            nombre :'Agility Adulto 10 kg',
            descuento :10,
            precio:  9000
            },
            {
            id : 7,
            imgPrincipal :  'ga-cat-selection-adulto-x-10kg-removebg-preview.png',
            nombre :'Cat Selection Premium Adulto 10 kg',
            descuento :10,
            precio:  7800
            },
            {
            id : 8,
            imgPrincipal : 'ga-excellent-Gato-adulto-removebg-preview.png',
            nombre :'Excellent Adulto 15 kg',
            descuento :10,
            precio:  15000
            },
            {
            id : 9,
            imgPrincipal : 'ga-infinity-Gato-adulto-10kg-removebg-preview.png',
            nombre :'Infinity Gato Adulto 10 kg',
            descuento :10,
            precio:  8000
            },
            {
            id : 10,
            imgPrincipal : 'pro-plan-Gato-adulto--removebg-preview.png',
            nombre :'Pro Plan Adulto 15 kg',
            descuento :10,
            precio:  19000
            },
            {
            id : 22,
            imgPrincipal :  'img-1669927778664.webp',
            nombre :' Purina®-Proplan®-Optistar 1kg',
            descuento :5,
            precio:  2552
            },
          
        
       
            {
            id : 11,
            imgPrincipal :  'royal-canin-Gato-kitten--removebg-preview.png',
            nombre :'Royal Canin Kitten 10kg',
            descuento :20,
            precio:  15000
            },
            {
            id : 12,
            imgPrincipal :'infinity-Perro-cachorro-10kg-removebg-preview.png',
            nombre :'Infinity Cachorro 10kg',
            descuento :20,
            precio:  8000
            },
            {
            id : 13,
            imgPrincipal :'pc-complete-Perro-junior--removebg-preview.png',
            nombre :'VitalCan Complete Junior 7.5kg',
            descuento :10,
            precio:  7500
            },
            {
            id : 14,
            imgPrincipal : 'pc-dog-selection-Perro-cachorro-x-10kg-removebg-preview.png',
            nombre :'Dog Selection Cachorro 10kg',
            descuento :20,
            precio:  7800
            },
            {
            id : 15,
            imgPrincipal :'pc-eukanuba-puppy-large-removebg-preview.png',
            nombre :'Eukanuba Puppy Large 7.5kg',
            descuento :20,
            precio:  8000
            },
            {
            id : 16,
            imgPrincipal :'pc-eukanuba-puppy-large-removebg-preview.png',
            nombre :'Eukanuba Puppy Large 7.5kg',
            descuento :10,
            precio:  9000
            },
            {
            id : 17,
            imgPrincipal :'pa-complete-adulto-light-20kg-removebg-preview.png',
            nombre :'VitalCan Complete Adulto 20 kg',
            descuento :10,
            precio:  17000
            },
            {
            id : 18,
            imgPrincipal :'pa-biopet-criadores-20kg-removebg-preview.png',
            nombre :'Biopet Adulto 15 kg',
            descuento :10,
            precio:  15000
            },
            {
            id : 19,
            imgPrincipal :'pa-complete-Perro-senior-20kg-removebg-preview.png',
            nombre :'VitalCan Complete Senior  20 kg',
            descuento :10,
            precio:  17000
            },
            {
            id : 20,
            imgPrincipal :'pa-infinity-Perro-adulto-20kg-removebg-preview.png',
            nombre :'Infinity Adulto 20 kg',
            descuento :10,
            precio:  19000
            }
          
        ] 




  {productosGatos.map((producto,index) =>
        <>
         <Productos
        producto={producto}
        key={index}
        id={producto.id}
        imgPrincipal={producto.imgPrincipal}
        nombre={producto.nombre}
        descuento={producto.descuento}
        precio={producto.precio}
        /></>
       
      
      )}
     {productosPerros.map((producto,index) =>
     
       <>
        <Productos
        producto={producto}
        key={index}
        id={producto.id}
        imgPrincipal={producto.imgPrincipal}
        nombre={producto.nombre}
        descuento={producto.descuento}
        precio={producto.precio}
        /></>
    
      )}




      
         
    
    

     