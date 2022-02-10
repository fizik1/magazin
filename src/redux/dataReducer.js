const defaultState = {
    cards:[
        {
            img:'/imgs/kiyim1.png',
            nomi: 'Lorem ipsum dolor sit amet',
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.',
            price: 855,
            id:0
            
        },
        {
            img:'/imgs/kiyim2.png',
            nomi: 'Lorem ipsum dolor sit amet',
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.',
            price: 855,
            id:1
        },
        {
            img:'/imgs/kiyim3.png',
            nomi: 'Lorem ipsum dolor sit amet',
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.',
            price: 855,
            id:2
        },
        {
            img:'/imgs/kiyim4.png',
            nomi: 'Lorem ipsum dolor sit amet',
            about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.',
            price: 855,
            id:3
        },
        
      ],
      categorys:[
        {
            img:"/imgs/kategoriya.png",
            kategoriya: 'Women’s wear'
        },
        {
            img:"/imgs/kategoriya.png",
            kategoriya: 'Women’s wear'
        },
        {
            img:"/imgs/kategoriya.png",
            kategoriya: 'Women’s wear'
        },
        {
            img:"/imgs/kategoriya.png",
            kategoriya: 'Women’s wear'
        },
        
      ]
}


export const dataReducer = (state = defaultState, action) =>{
    switch(action.type){
        default:
            return state
    }
}