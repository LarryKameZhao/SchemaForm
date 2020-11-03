const Ajv = require('ajv')
const schema = {
  type:'object',
  properties:{
    name:{
      type:'string',
      minLength:10
    },
    age:{
      type:'number'
    },
    pets:{
      type:'array',
      items:{
        type:'string'
      }
    },
    isWorker:{
      type:'boolean',
      
    },
    
  },
  required:['name','isWorker']
}
const ajv = new Ajv()
const validate = ajv.compile(schema)
const valid = validate({name:'name123456',age:12,pets:['aa','bb']})
if(!valid) {
  console.log(validate.errors)
}