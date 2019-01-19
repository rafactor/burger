class Burger {
    constructor(){

    }

    selectAll(){
        connection.query("SELECT * FROM burger", function(err, res) {
            if (err) throw err;
        
            console.log('selected')
            return res
          });
    }

    insertOne(){
        connection.query("INSERT INTO burger SET?", {burger_name: order},function(err, res) {
            if (err) throw err;
            
            console.log('inserted')
            return res
          });
    }

    updateOne(){
        var updateOne = function(id){
            connection.query("UPDATE posts SET devoured = ? WHERE burger_id = ?", [false, id], function(err, res) {
                if (err) throw err;
                
                console.log(`burger id ${id} updated`)
                return res
              });
        }
    }
}




module.exports = Burger