import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="yourusername",
  passwd="yourpassword",
  database="CREATE DATABASE book_keeper_DB"
)

mycursor = mydb.cursor()
