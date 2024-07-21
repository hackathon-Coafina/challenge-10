# Proyecto de Clasificación de Pinturas

Este proyecto tiene como objetivo desarrollar redes neuronales para predecir el género y el autor de una pintura. Hemos implementado dos redes neuronales separadas, cada una diseñada para alcanzar uno de estos objetivos.

## Resumen del Proyecto

Los principales objetivos de este proyecto son:
1. **Predecir el Género de una Pintura**: Desarrollar una red neuronal para clasificar pinturas en diferentes géneros.
2. **Predecir el Autor de una Pintura**: Desarrollar una red neuronal para identificar al autor de una pintura.

## Tabla de Contenidos
- [Proyecto de Clasificación de Pinturas](#proyecto-de-clasificación-de-pinturas)
  - [Resumen del Proyecto](#resumen-del-proyecto)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Dataset](#dataset)
  - [Requisitos](#requisitos)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Preprocesamiento](#preprocesamiento)
  - [Entrenamiento del Modelo](#entrenamiento-del-modelo)
    - [Modelo de Clasificación de Géneros](#modelo-de-clasificación-de-géneros)
    - [Modelo de Clasificación de Autores](#modelo-de-clasificación-de-autores)
  - [Evaluación del Modelo](#evaluación-del-modelo)
  - [Uso](#uso)
  - [Contribuir](#contribuir)
  - [Licencia](#licencia)

## Dataset

El dataset utilizado en este proyecto consiste en imágenes de pinturas obtenidas de [WikiArt](https://www.wikiart.org/). WikiArt es una enciclopedia visual del arte que proporciona acceso a una gran colección de pinturas de varios géneros y autores. Cada imagen en el dataset está etiquetada con su género y autor, lo que nos permite utilizar estos datos para entrenar nuestras redes neuronales.

La estructura del dataset está organizada en diferentes carpetas según los géneros y autores, lo que facilita el acceso y la preparación de los datos para el entrenamiento de los modelos.

## Requisitos

Para ejecutar este proyecto, necesitas tener instaladas las siguientes bibliotecas:

## Preprocesamiento

Utilizamos una función de preprocesamiento para redimensionar, normalizar y aumentar las imágenes. Esta función se aplica tanto a la clasificación de géneros como a la de autores.

### Función de Preprocesamiento
La función de preprocesamiento incluye los pasos de redimensionamiento, normalización y posibles aumentos de datos, como recortes aleatorios y máscaras de corte.

## Entrenamiento del Modelo

### Modelo de Clasificación de Géneros
La red neuronal para la clasificación de géneros está diseñada para categorizar pinturas en varios géneros. El proceso de entrenamiento implica cargar y preprocesar el dataset, definir y compilar el modelo, entrenar el modelo y guardarlo para su uso futuro.

### Modelo de Clasificación de Autores
La red neuronal para la clasificación de autores está diseñada para identificar al autor de una pintura. Al igual que en la clasificación de géneros, el proceso de entrenamiento incluye cargar y preprocesar el dataset, definir y compilar el modelo, entrenar el modelo y guardarlo.

## Evaluación del Modelo

Después del entrenamiento, evaluamos los modelos en un conjunto de validación para evaluar su rendimiento. Esto implica calcular la precisión y la pérdida en el conjunto de validación y ajustar los hiperparámetros según sea necesario.

## Uso

Para usar los modelos para la predicción, es necesario preprocesar la imagen de entrada y pasarla al modelo correspondiente. Esto incluye cargar la imagen, aplicar la función de preprocesamiento y utilizar el modelo entrenado para predecir el género o el autor.

## Contribuir
Si deseas contribuir a este proyecto, por favor haz un fork del repositorio y crea un pull request con tus cambios.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.