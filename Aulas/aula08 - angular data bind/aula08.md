# Angular Data Binding

- [Data binding - documentação](https://v17.angular.io/guide/binding-overview)
- [Angular material](https://material.angular.io/components/categories)

### Exemplos
  - text interpolations    |  {{ }}
  - property binding       |  []
  - event binding          |  ()
  - two-way binding        |  [()]

### Executar aplicação
    ng serve --open
    ng s -o

### Componentes utilizados
    ng g c components/shared/navbar
    ng g c components/shared/button

    ng g c components/views/text-interpolation
    ng g c components/views/property-binding --skip-tests
    ng g c components/views/event-binding
    ng g c components/views/two-way-data-binding