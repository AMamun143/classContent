## A GET request ##
 `curl -i -H "Accept: application/json" -X GET http://localhost:8080`

## A POST request *
 `curl -i -H "Accept: application/json" -X POST -d "hello" http://localhost:8080`

## A POST request ##
 `curl -i -H "Accept: application/json" -X DELETE -d "hello" http://localhost:8080`
 
## curl documentation ##
### Flags being used
+ `-i` include the header
+ `-H` add extra header information
+ `-X` specifiy the type of HTTP request
+ `-d` send some data

Read the full docs [here](https://curl.haxx.se/docs/manpage.html)



