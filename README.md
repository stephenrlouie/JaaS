# JaaS: Jokes as a Service

Our mission is to provide a centralized machine readable repository of SFW jokes / puns / funny statements. 

##Contributing Guide:
1. Fork and submit PR's
2. Jokes must follow formatting guide
3. Tags used must be added to the global tags list.

##Formatting Guide:

**jokes.json**:

1. tag: <List> - User generated tags, used for searching / meta data. Examples: 'knock knock', 'pun', 'play on words'
2. setup: <String> - The first part of the joke. For knock knock jokes you can put "who"
3. punchline: <String> - The punchline of the joke. For knock knock jokes you can put the "response"
4. source: <String> - The url source of the joke

JSON Schema for jokes.json:
```
{
    "title": Joke Set",
    "description": "The collection of jokes.",
    "type": "array",
    "items":{
        "title": "Joke",
        "description": "A singular joke",
        "type": "object",
        "properties": {
            "tags": {
                "type": "array",
                "description" : "The meta-data tags associated with this joke",
                "items": {
                    "type": "string"
                },
                "uniqueItems: true
            },
            "setup": {
                "type": "string",
                "description": "The first line of the joke"
            },
            "punchline": {
                "type": "string",
                "description": "The punchline of the joke"
            },
            "source": {
                "type": "string",
                "description": "Citation information for the joke source"
            }
        },
        "required": ["tags", "setup", "punchline"]
    }
}
```


###Examples
```
{
  "tag": [
    "food",
    "play on words"
  ],
  setup: "What do you call a fake noodle?",
  punchline: "An Impasta",
  scoure: "http://jokes4us.com/miscellaneousjokes/schooljokes/kidjokes.html"
}
{
  "tag": [
    "knock knock"
  ],
  setup: "Orange",
  punchline: "Orange you going to let me in",
  scoure: "http://www.funology.com/knock-knock-jokes/"
}
```


**tags.json**

JSON Schema for tags.json:
```
{
    "title": Tags Set",
    "description": "The collection of tags.",
    "type": "array",
    "items": {
        "Title": "Tag",
        "description": "The tag to describe a joke category",
        "type": "string"
    }
}
```
