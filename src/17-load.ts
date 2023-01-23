import _ from 'lodash';

const data = [
  {
    username: 'pepe',
    role: 'admin'
},
{
  username: 'zulema',
  role: 'seller'
},
{
  username: 'juan',
  role: 'editor'
},
{
  username: 'santiago',
  role: 'seller'
},

]

const rta = _.groupBy(data, (item)=> item.role);

console.log(rta);
