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

## Options

  - Uppercase (the first letter of the article is on uppercase)
  - Only article (it returns only the article)

  ### Examples

  Uppercase
  ```
  {{ house | articler: true }}
  ```

  Only article
  ```
  {{ house | articler: false:true }}
  ```

  Uppercase and only article
  ```
  {{ house | articler: true:true }}
  ```
