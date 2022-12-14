# TS Rest Test

## Objective

Objective is to write a TS Node.JS application exposing REST endpoints allowing us to : 

* Retrieve data stored in a file
* Add new entry to the file

+ Typescript must be used & no usage of implicit any
+ Returned results must be typed
+ Router must be protected and can't be accessed publicly (No need for a true jsonwebtoken, can be just set as "req.headers.authorization" === "string")
+ Router must rely on IoC in order to create & retrieve the data