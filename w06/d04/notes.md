
###each
```js
var numbers=[1,2,3,4,5];
numbers.forEach(function(num)
{
    console.log(num);
    });
```

```ruby
array=[1,2,3,4,5]
array.each do |num|
    puts num
end
```

```ruby
hash={
    "Leo"=>"blue",
    "Mike"=>"orange",
    "Don"=>"purple",
    "Raph"=>"red"
}

hash.each do |key,value|
    puts "#{key}" wears a "#{value} bandana"
end
```

###select
```rb
numbers = [1,2,3,4,5,6]
evens = numbers.select{|n| n % 2 === 0}
#puts even
```

```js
var numbers [1,2,3,4,5,6];
var even = numbersFilter(function(n)
{
    return n % 2 === 0;
    });
```

###map!
```rb
numbers = [1,2,3,4,5]
multi_by_3 = numbers.map!{|num| num*3}
multi_by_3 #[3,6,9,12,15]
#will return a new array from numbers array
```

```js
var numbers = [1,2,3,4,5]
var multiBy3 = numbers.map(function(numb)
{
    return numb*3;
    });
```

###Hosting

```
$ node server.js &

$ http-server &

$ nohup node server.js &

$ ps
$ ps -a
$ ps -ef #
$p s -aux #

$ kill -9 #

$ ps -aux | grep node or http-server