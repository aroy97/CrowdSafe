import numpy as np
import os
import six.moves.urllib as urllib
import sys
import tarfile
import tensorflow as tf
import zipfile

from collections import defaultdict
from io import StringIO
from matplotlib import pyplot as plt
from PIL import Image
from IPython.display import display

from object_detection.utils import ops as utils_ops
from object_detection.utils import label_map_util
from object_detection.utils import visualization_utils as vis_util
# patch tf1 into `utils.ops`
utils_ops.tf = tf.compat.v1

# Patch the location of gfile
tf.gfile = tf.io.gfile
import os
import pathlib

    
class object_detection:
  count_person=[]
  def __init__(self):
    # List of the strings that is used to add correct label for each box.
    self.PATH_TO_LABELS = 'models/research/object_detection/data/mscoco_label_map.pbtxt'
    self.category_index = label_map_util.create_category_index_from_labelmap(self.PATH_TO_LABELS, use_display_name=True)
    # If you want to test the code with your images, just add path to the images to the TEST_IMAGE_PATHS.
    self.PATH_TO_TEST_IMAGES_DIR = pathlib.Path('models/research/object_detection/test_images/Crowd/')
    self.TEST_IMAGE_PATHS = sorted(list(self.PATH_TO_TEST_IMAGES_DIR.glob("*.jpg")))
    print(self.TEST_IMAGE_PATHS)
    model_name = 'faster_rcnn_resnet101_coco_2018_01_28'
    self.detection_model = self.load_model(model_name)
    print(self.detection_model.inputs)
    print(self.detection_model.output_dtypes)
  def load_model(self,model_name):
    base_url = 'http://download.tensorflow.org/models/object_detection/'
    model_file = model_name + '.tar.gz'
    model_dir = tf.keras.utils.get_file(
      fname=model_name, 
      origin=base_url + model_file,
      untar=True)

    model_dir = pathlib.Path(model_dir)/"saved_model"

    model = tf.saved_model.load(str(model_dir))
    model = model.signatures['serving_default']

    return model
  def run_inference_for_single_image(self,model, image):
    image = np.asarray(image)
  # The input needs to be a tensor, convert it using `tf.convert_to_tensor`.
    input_tensor = tf.convert_to_tensor(image)
  # The model expects a batch of images, so add an axis with `tf.newaxis`.
    input_tensor = input_tensor[tf.newaxis,...]
  #print(input_tensor)
  # Run inference
    output_dict = model(input_tensor)

  # All outputs are batches tensors.
  # Convert to numpy arrays, and take index [0] to remove the batch dimension.
  # We're only interested in the first num_detections.
    num_detections = int(output_dict.pop('num_detections'))
    output_dict = {key:value[0, :num_detections].numpy() 
                  for key,value in output_dict.items()}
    output_dict['num_detections'] = num_detections

  # detection_classes should be ints.
    output_dict['detection_classes'] = output_dict['detection_classes'].astype(np.int64)
   
  # Handle models with masks:
    if 'detection_masks' in output_dict:
    # Reframe the the bbox mask to the image size.
      detection_masks_reframed = utils_ops.reframe_box_masks_to_image_masks(
                output_dict['detection_masks'], output_dict['detection_boxes'],
                image.shape[0], image.shape[1])      
      detection_masks_reframed = tf.cast(detection_masks_reframed > 0.5,
                                       tf.uint8)
      output_dict['detection_masks_reframed'] = detection_masks_reframed.numpy()
    
    return output_dict
  
  def show_inference(self,model, image_path):
  # the array based representation of the image will be used later in order to prepare the
  # result image with boxes and labels on it.
    image_np = np.array(Image.open(image_path))
  # Actual detection.
    output_dict = self.run_inference_for_single_image(model, image_np)
  # print(output_dict)
  # Visualization of the results of a detection.
    vis_util.visualize_boxes_and_labels_on_image_array(
        image_np,
        output_dict['detection_boxes'],
        output_dict['detection_classes'],
        output_dict['detection_scores'],
        self.category_index,
        instance_masks=output_dict.get('detection_masks_reframed', None),
        use_normalized_coordinates=True,
        line_thickness=8)
    scores=output_dict['detection_scores']
    classes=output_dict['detection_classes']
    final_score = np.squeeze(scores)  
    count = 0
    for i in range(len(scores)):
            if len(scores)==1:
              if final_score>0.5 and classes[i]==1:
                count = count + 1
            elif scores is None or final_score[i] > 0.5 and classes[i]==1:
                    count = count + 1
    print(count)
    self.count_person.append(count)
    display(Image.fromarray(image_np))
  def __main__(self):
    
    print(self.TEST_IMAGE_PATHS)
    for image_path in self.TEST_IMAGE_PATHS:
        
        self.show_inference(self.detection_model, image_path)
  
    for i in range(len(self.count_person)):
      if self.count_person[i]<10:
        print("Mild")
      elif self.count_person[i]>=10 and self.count_person[i]<25:
        print("Low")
      elif self.count_person[i]>=25 and self.count_person[i]<50:
        print("Medium")
      else:
        print("High Alert")
o=object_detection()
o.__main__()
