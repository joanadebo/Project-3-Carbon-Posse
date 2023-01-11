
# import numpy as np

# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine, func

# from flask import Flask, jsonify

# #################################################
# # Database Setup
# #################################################
# engine = create_engine("postgresql://postgres:0206Teddy@localhost:5432/CO2_Emissions")

# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(engine, reflect=True)

# # Save reference to the table
# Emissions = Base.classes.emissions

# #################################################
# # Flask Setup
# #################################################
# app = Flask(__name__)

# #################################################
# # Flask Routes
# #################################################

# @app.route("/")
# def welcome():
#     """List all available api routes."""
#     return (
#         f"Available Routes:<br/>"
#         f"/api/v1.0/countries<br/>"
#     )

# @app.route("/api/v1.0/countries")
# def names():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     """Return a list of all countries"""
#     # Query all passengers
#     results = session.query(Emissions.Country).distinct().all()

#     session.close()

#     # Convert list of tuples into normal list
#     all_countries = list(np.ravel(results))

#     return jsonify(all_countries)

# if __name__ == '__main__':
#     app.run(debug=True)



import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template
import psycopg2
#################################################
# Database Setup
#################################################
DB_NAME = "CO2_emissions"
DB_USER = "postgres"
DB_PASS = "0206Teddy"
DB_HOST = "localhost"
DB_PORT = "5432"
 
    
engine = create_engine("postgresql://postgres:0206Teddy@localhost:5432/CO2_emissions")
conn = psycopg2.connect(database=DB_NAME,
                            user=DB_USER,
                            password=DB_PASS,
                            host=DB_HOST,
                            port=DB_PORT)
cur = conn.cursor()
#################################################
# Flask Setup
#################################################
app = Flask(__name__)
#################################################
# Flask Routes
#################################################
@app.route("/")
def home():
    """List all available api routes."""
    return render_template("/index.html")

@app.route("/api/v1.0/countries")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    """Return a list of all countries"""
    # Query all passengers
    results = engine.execute("SELECT DISTINCT COUNTRY FROM emissions").fetchall()
    countries = list(np.ravel(results))
    session.close()
    return jsonify(countries)

@app.route("/api/v1.0/1750")
def year_one():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    co2_results = engine.execute("SELECT COUNTRY, co2_emission_in_tons FROM emissions WHERE YEAR = 1750;").fetchall()
    co2_results = [dict(r) for r in co2_results]
    # emissions_1750 = dict(np.ravel(co2_results))
    session.close()
    return jsonify(co2_results)
# # for i in results:
#         print (i)
# # print(results)
# #     # results = session.query(Emissions.Country).distinct().all()

# #     # Convert list of tuples into normal list
# #     all_countries = list(np.ravel(results))
# #     return jsonify(all_countries)
if __name__ == '__main__':
    app.run(debug=True)
 
