# Articler

Angular filter based on the code by [Eamon Nerbonne](http://eamon.nerbonne.org/2013/04/a-vs-determine-appropriate-english.html)

[Demo](http://santiestra.github.io/articler/)

This package provides a filter to determine if a word should be preceded by "a" or "an".

## Installation
```
bower install --save articler
```

**Add it to you dependencies**
```
angular.module('demo', ['articler']);
```

## Example
```
{{ house | articler }}
```

With uppercase
```
{{ house | articler: true }}
```
