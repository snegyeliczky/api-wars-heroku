import json
import requests
import database_common
import bcrypt

def get_planets():
    response = requests.get('https://swapi.co/api/planets').json()
    planets = response['results']
    return planets

def hash_password(plain_text_password):
    # By using bcrypt, the salt is saved into the hash itself
    hashed_bytes = bcrypt.hashpw(plain_text_password.encode('utf-8'), bcrypt.gensalt())
    return hashed_bytes.decode('utf-8')

def verify_password(plain_text_password, hashed_password):
    hashed_bytes_password = hashed_password.encode('utf-8')
    return bcrypt.checkpw(plain_text_password.encode('utf-8'), hashed_bytes_password)

@database_common.connection_handler
def writeUser(cursor,username,password):
    password = hash_password(password)
    id = getId()['max']+1
    cursor.execute("""
                    INSERT INTO users (id,username,password_hash)
                    VALUES (%(id)s,%(username)s,%(password)s)
                    """,{'id':id,'username':username,'password':password})


@database_common.connection_handler
def getId(cursor):
    cursor.execute("""
                    SELECT max(id)
                    FROM users
                    """)
    return cursor.fetchone()

@database_common.connection_handler
def get_hashed_password(cursor,username):
    cursor.execute("""
                        SELECT password_hash
                        FROM users
                        WHERE username = %(username)s
                        """,{"username":username})
    hash_password = cursor.fetchone()
    return hash_password['password_hash']

@database_common.connection_handler
def get_user(cursor,username):
    cursor.execute("""
                    SELECT username
                    FROM users
                    WHERE username = %(username)s
                    """, {'username': username})
    user = cursor.fetchone()
    print(user)
    return user
