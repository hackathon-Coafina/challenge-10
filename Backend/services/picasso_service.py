import tensorflow as tf
import numpy as np
import pickle
from utils import preprocess_image

class PicassoService:
    def __init__(self, file: bytes) -> None:
        self.file = file

        self.model_genre = tf.keras.models.load_model('models/model_genre.h5')
        self.model_artist = tf.keras.models.load_model('models/model_artist.h5')

        self.genre_class_names = pickle.load(open('models/genre_class_names.pickle', 'rb'))
        self.artist_class_names = pickle.load(open('models/artist_class_names.pickle', 'rb'))

        self.author: str | None = self.predict_author(self.artist_class_names)#"The author"
        self.type_picture: str | None = self.predict_author(self.artist_class_names)#"The Picture Type"

    def __str__(self) -> str:
        return f"Author is: {self.author} and your type pincture is {self.type_picture}"

    def predict_author(self):
        img = preprocess_image(self.file, augmentation=False, rescale=True)
        img = tf.expand_dims(img, axis=0)  # Add batch dimension

        predictions = self.model_artist.predict(img)
        predicted_class = np.argmax(predictions, axis=1)[0]

        predicted_author = self.artist_class_names[predicted_class]
        return predicted_author
    
    def predict_genre(self):
        img = preprocess_image(self.file, augmentation=False, rescale=True)
        img = tf.expand_dims(img, axis=0)  # Add batch dimension

        predictions = self.model_genre.predict(img)
        predicted_class = np.argmax(predictions, axis=1)[0]

        predicted_genre = self.genre_class_names[predicted_class]
        return predicted_genre