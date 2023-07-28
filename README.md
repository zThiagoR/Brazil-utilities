# Brazil Utilities

Brazil Utilities is a library that contains a set of functions to help you with the most common validations in Brazil.

## Installation

To install the library you can use one of the following commands:

```bash
npm install brazil-utilities

or 

yarn add brazil-utilities
```
## Usage

To use one of our utilities you just need to import the required function as in the example below:

```javascript
import { formatCPF } from 'brazil-utilities';

console.log(formatCPF('12345678900')) // Result: 123.456.789-00
```

## Functions

### formatCPF

This function formats a CPF number to the following format: 123.456.789-00

```javascript
import { formatCPF } from 'brazil-utilities';

console.log(formatCPF('12345678900')) // Result: 123.456.789-00
```

### formatCNPJ

This function formats a CNPJ number to the following format: 12.345.678/0001-00

```javascript
import { formatCNPJ } from 'brazil-utilities';

console.log(formatCNPJ('12345678000100')) // Result: 12.345.678/0001-00
```

### formatCEP

This function formats a CEP number to the following format: 12345-678

```javascript
import { formatCEP } from 'brazil-utilities';

console.log(formatCEP('12345678')) // Result: 12345-678
```