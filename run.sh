./sh
cd mongoConnection/
mvn package
cd ..
cd apiUpdater/
mvn package
cd ..
cd productApi/
mvn package
cd ..
cd trakienCustomerAPI/
mvn package
cd ..
cd trakienWeb/
npm install
npm run build
cd ..
docker-compose up -d --build