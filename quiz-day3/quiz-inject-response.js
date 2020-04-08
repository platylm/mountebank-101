function (request) { 
    if (request.body.includes('riderX')) { 
      return { 
        statusCode: 201,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'message': 'item is created'})
      }; 
    } 

    if (request.body.includes('alpha bot')) { 
        return { 
          statusCode: 401,
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({'message': 'item is not allowed'})
        }; 
      } 
    return {
      statusCode: 404,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'message': 'item is not found'})
    }; 
}