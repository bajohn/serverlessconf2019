Authorization: Basic cHVibGljOkQwdFB1NmwxY0BwMQ==

https://nycdotsigns.net/-74.01105380000001:40.7079934/parking,21/182


General Aggregation in Node.js

            "on_street":"BROADWAY",
            "from_street":"CANAL STREET",
            "to_street":"WALKER STREET",

- Map over these attributes in Queries
- aggregate queries by SMO_code
- filter by SMO_code based on question
- return result back result





Questions
---
Q: My Car is parked at X -- Give me the information about X place


Q: What is the street sweeping schedule for {x}? 

look for `smo_code` on "smo_subtype":"Street Cleaning", rules involved are "sign_description":"NO PARKING (SANITATION BROOM SYMBOL) MOON & STARS (SYMBOLS) TUESDAY FRIDAY 2AM-6AM <-> ",



Q: Where can I paid parking?

- Query on `smo_code` "PS-9A" and then list the closest ones by intersection 

                "on_street": "PEARL STREET",
                "from_street": "COENTIES SLIP",
                "to_street": "BROAD STREET",
- Your closest to X location is "{on_street}" between "{from_street}" and "to{street}} - Alternatives in include the below [Paginated set of results form this page]

Q: Where are there loading zones for driver? 
- Query on "{PS-279C}" and "PS-153E" are commercial zones for drivers to load their vehicles in this are. Alternatives include in the below [Paginated set of results form this page]

        {
            "type": "Feature",
            "properties": {
                "id": 10250965,
                "order_number": "P-01262415",
                "sos": "E",
                "sos_new": [
                    "E",
                    "East side"
                ],
                "on_street": "PEARL STREET",
                "from_street": "COENTIES SLIP",
                "to_street": "BROAD STREET",
                "smo_code": "PS-279C",
                "sign_description": "3 HMP COMMERCIAL VEHICLES ONLY 7AM-5PM EXCEPT SUNDAY \u003c-\u003e ",
                "size_description": "018 X 024",
                "facing_direction_type": null,
                "arrow_points": null,
                "distance_from_intersection": 199,
                "smo_category": "parking",
                "smo_subtype": "Metered Parking",
                "last_work_date": "2017-08-17",
                "notes": null
            },


Q: Where can I find free parking around X
 (question is find streets around you and keep going until you find street with only sweep information)'





# 1 
-- Requests 
{
            "type": "Feature",
            "properties": {
                "id": 10250962,
                "order_number": "P-01262415",
                "sos": "E",
                "sos_new": [
                    "E",
                    "East side"
                ],
                "on_street": "PEARL STREET",
                "from_street": "COENTIES SLIP",
                "to_street": "BROAD STREET",
                "smo_code": "PS-9A",
                "sign_description": "ZONE#100045 PAY BY CELL LOCATOR",
                "size_description": "018 X 006",
                "facing_direction_type": null,
                "arrow_points": null,
                "distance_from_intersection": 64,
                "smo_category": "parking",
                "smo_subtype": "Metered Parking",
                "last_work_date": "2017-08-23",
                "notes": "100045"
            }
}
# 2 
        {
            "type": "Feature",
            "properties": {
                "id": 10250965,
                "order_number": "P-01262415",
                "sos": "E",
                "sos_new": [
                    "E",
                    "East side"
                ],
                "on_street": "PEARL STREET",
                "from_street": "COENTIES SLIP",
                "to_street": "BROAD STREET",
                "smo_code": "PS-279C",
                "sign_description": "3 HMP COMMERCIAL VEHICLES ONLY 7AM-5PM EXCEPT SUNDAY \u003c-\u003e ",
                "size_description": "018 X 024",
                "facing_direction_type": null,
                "arrow_points": null,
                "distance_from_intersection": 199,
                "smo_category": "parking",
                "smo_subtype": "Metered Parking",
                "last_work_date": "2017-08-17",
                "notes": null
            }
        }
        
``` 