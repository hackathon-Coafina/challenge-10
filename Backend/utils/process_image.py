import tensorflow as tf
import numpy as np
from utils.constants import IMG_SIZE

def preprocess_image(image, augmentation=False, rescale=True, crop_size=0.5, crop_p=0.75, cutout_count=5, cutout_p=0.75, cutout_masksize=0.2):
    #img = tf.io.read_file(file_path)
    img = tf.io.decode_jpeg(image, channels=3)

    if augmentation:
        crop_p = tf.cast(tf.random.uniform([], 0, 1) < crop_p, tf.float32)
        r = 1.0 + crop_size * np.random.random() * crop_p
        img = resize(img, size=int(IMG_SIZE * r))
        img = tf.image.random_crop(img, size=[IMG_SIZE, IMG_SIZE, 3])
        img = tf.image.random_flip_left_right(img)
        if cutout_count > 0:
            img = dropout(img, size=IMG_SIZE, p=cutout_p, count=cutout_count, cutout_masksize=cutout_masksize)
    else:
        img = resize(img, size=IMG_SIZE)

    if rescale:
        img = tf.cast(img, tf.float32) / 255.0

    return img

def resize(image, size):
    return tf.image.resize(image, [size, size])

def dropout(img, size, p, count, cutout_masksize):
    p = tf.cast(tf.random.uniform([], 0, 1) < p, tf.int32)
    if (p == 0) | (count == 0) | (cutout_masksize == 0):
        return img

    for _ in range(count):
        x = tf.cast(tf.random.uniform([], 0, size), tf.int32)
        y = tf.cast(tf.random.uniform([], 0, size), tf.int32)
        width = tf.cast(cutout_masksize * size, tf.int32)
        ya = tf.maximum(0, y - width // 2)
        yb = tf.minimum(size, y + width // 2)
        xa = tf.maximum(0, x - width // 2)
        xb = tf.minimum(size, x + width // 2)
        one = img[ya:yb, 0:xa, :]
        two = tf.zeros([yb - ya, xb - xa, 3])
        three = img[ya:yb, xb:size, :]
        middle = tf.concat([one, two, three], axis=1)
        img = tf.concat([img[0:ya, :, :], middle, img[yb:size, :, :]], axis=0)
    img = tf.reshape(img, [size, size, 3])
    return img