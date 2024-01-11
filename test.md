1. get FrontAPIEndpoint value
2. get api key
3. replace them in curl -X POST front-api-end-point-url \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: api-ley' \
    -d @test.json


https://a010eozjck.execute-api.cn-north-1.amazonaws.com.cn/prod/
hbiVUzmukR2ejXv6KJalk9mXafL6ZEfo1v2wXSgY

curl -X POST https://a010eozjck.execute-api.cn-north-1.amazonaws.com.cn/prod/ \
    -H 'Content-Type: application/json' \
    -H 'x-api-key: hbiVUzmukR2ejXv6KJalk9mXafL6ZEfo1v2wXSgY' \
    -d @test.json