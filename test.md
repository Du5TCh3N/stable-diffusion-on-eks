1. get FrontAPIEndpoint value
2. get api key
3. replace them in curl -X POST front-api-end-point-url \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: api-ley' \
    -d @test.json


https://x5eas04vw1.execute-api.cn-north-1.amazonaws.com.cn/prod/
9TTM3vyVQy2d46XjgGxSz2y20uQXzdxe4ys8aoXB

curl -X POST https://x5eas04vw1.execute-api.cn-north-1.amazonaws.com.cn/prod/ \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: 9TTM3vyVQy2d46XjgGxSz2y20uQXzdxe4ys8aoXB' \
    -d @test.json