docker exec -it db mongoexport -u "admin" -p "admin" --authenticationDatabase=admin --uri="mongodb://localhost:27017/products" --collection=product --out "./products.json"
docker cp db:/products.json ./DataBaseModel/data