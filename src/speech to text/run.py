# Python program to translate
# speech to text and text to speech


import speech_recognition as sr
import pyttsx3
import nltk
from nltk.corpus import stopwords
nltk.download('punkt')
# Initialize the recognizer
r = sr.Recognizer()
political_words = ['democrat', 'republican', 'liberal', 'conservative', 'socialist', 'fascist', 'communist', 'capitalist', 'anarchist', 'totalitarian']
nltk.download('stopwords')
def detect_political_words(text):
    # tokenize the text into words
    words = nltk.word_tokenize(text.lower())
    
    # remove stopwords from the list of words
    words = [word for word in words if word not in stopwords.words('english')]
    
    # iterate through the list of words and check if any are political words
    political_word_count = 0
    for word in words:
        if word in political_words:
            political_word_count += 1
            
    # return the number of political words detected
    return political_word_count

# Function to convert text to
# speech
def SpeakText(command):
	
	# Initialize the engine
	engine = pyttsx3.init()
	engine.say(command)
	engine.runAndWait()
	
	
# Loop infinitely for user to
# speak

while(1):
	
	# Exception handling to handle
	# exceptions at the runtime
	try:
		
		# use the microphone as source for input.
		with sr.Microphone() as source2:
			
			# wait for a second to let the recognizer
			# adjust the energy threshold based on
			# the surrounding noise level
			r.adjust_for_ambient_noise(source2, duration=0.2)
			
			#listens for the user's input
			audio2 = r.listen(source2)
			
			# Using google to recognize audio
			MyText = r.recognize_google(audio2)
			MyText = MyText.lower()
			political_word_count = detect_political_words(MyText)

			print("Did you say ",MyText)
			#SpeakText(MyText)
			
			if political_word_count<=0:
				print("Only political discussion is encouraged")
				print("The end")
				quit()
				
				
			
	except sr.RequestError as e:
		print("Could not request results; {0}".format(e))
		
	except sr.UnknownValueError:
		print("Good Conversation. Time's up. Thank you for your discussion")
		quit()




