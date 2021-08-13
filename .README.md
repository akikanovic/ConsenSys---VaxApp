## Build manufacturer

cd manufacturer\
docker build -t manufacturer .

## Build authority

cd..\
cd authority\
docker build -t authority .

## Build customer

cd..\
cd customer\
docker build -t customer .

## Run

cd ..\
docker compose up
