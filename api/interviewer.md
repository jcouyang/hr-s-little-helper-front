# GET /api/v1/interviewer
+ Response 200 (application/json)
    + Body
          {
              "email":"jichao@thoughtworks.com",
              "name":"jichao ouyang"
          }

# POST /api/v1/interviewer
+ Request (application/json)

            {
                "email": "hehe@mail.com",
                "name": "chao"
            }
+ Response 201 (application/json)
            {
                "email": "hehe@mail.com",
                "name": "chao"
            }
