const INITIAL_STATE = {
    sections : [
        {
          title: 'ball',
          imageUrl: 'https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 1,
          linkUrl: 'shop/ball'
        },
        {
          title: 'Bats',
          imageUrl: 'https://images.pexels.com/photos/4747325/pexels-photo-4747325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 2,
          linkUrl: 'shop/bats'
        },
        {
          title: 'accessories',
          imageUrl: 'https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id: 3,
          linkUrl: 'shop/accessories'
        },
        {
          title: 'indoor',
          imageUrl: 'https://images.unsplash.com/photo-1599641499370-f4338ba82a04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kb29yJTIwZ2FtZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          size: 'large',
          id: 4,
          linkUrl: 'shop/indoor'
        },
        {
          title: 'outdoor',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1i529spkFt2YnpE3-46Yh_23VyZidTYYxSQ&usqp=CAU',
          size: 'large',
          id: 5,
          linkUrl: 'shop/outdoor'
        }
      ]
};

const directoryReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        default : 
            return state;
    }
};

export default directoryReducer;