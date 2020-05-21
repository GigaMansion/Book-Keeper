import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="yourusername",
  passwd="yourpassword",
  database="book_keeper_DB"
)

mycursor = mydb.cursor()
