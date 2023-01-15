import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template
import psycopg2
from datapackage import Package
import json
#################################################
# Database Setup
#################################################
DB_NAME = "Emissions"
DB_USER = "postgres"
DB_PASS = "rossygossy64"
DB_HOST = "localhost"
DB_PORT = "5432"
 
    
engine = create_engine("postgresql://postgres:rossygossy64@localhost:5432/Emissions")
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

@app.route("/api/v1.0/<year>")
def emissions(year):
    year = int(year)
    # Create our session (link) from Python to the DB
    session = Session(engine)
    co2_results = engine.execute(f"SELECT COUNTRY, co2_emission_in_tons, YEAR FROM emissions WHERE YEAR = {year};").fetchall()
    co2_results = [dict(r) for r in co2_results]
    # emissions_1750 = dict(np.ravel(co2_results))
    session.close()
    return jsonify(co2_results)

# @app.route("/api/v1.0/1800")
# def year_two():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)
#     co2_1800 = engine.execute("SELECT COUNTRY, co2_emission_in_tons FROM emissions WHERE YEAR = 1800;").fetchall()
#     co2_1800 = [dict(r) for r in co2_1800]
#     session.close()
#     return jsonify(co2_1800)


# @app.route("/api/v1.0/1850")
# def year_three():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)
#     co2_1850 = engine.execute("SELECT COUNTRY, co2_emission_in_tons FROM emissions WHERE YEAR = 1850;").fetchall()
#     co2_1850 = [dict(r) for r in co2_1850]
#     session.close()
#     return jsonify(co2_1850)


# @app.route("/api/v1.0/1900")
# def year_four():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)
#     co2_1900 = engine.execute("SELECT COUNTRY, co2_emission_in_tons FROM emissions WHERE YEAR = 1900;").fetchall()
#     co2_1900 = [dict(r) for r in co2_1900]
#     session.close()
#     return jsonify(co2_1900)

# @app.route("/api/v1.0/1950")
# def year_five():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)
#     co2_1950 = engine.execute("SELECT COUNTRY, co2_emission_in_tons FROM emissions WHERE YEAR = 1950;").fetchall()
#     co2_1950 = [dict(r) for r in co2_1950]
#     session.close()
#     return jsonify(co2_1950)

# @app.route("/api/v1.0/2000")
# def year_six():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)
#     co2_2000 = engine.execute("SELECT COUNTRY, co2_emission_in_tons FROM emissions WHERE YEAR = 2000;").fetchall()
#     co2_2000 = [dict(r) for r in co2_2000]
#     session.close()
#     return jsonify(co2_2000)

# @app.route("/api/v1.0/2020")
# def year_seven():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)
#     co2_2020 = engine.execute("SELECT COUNTRY, co2_emission_in_tons FROM emissions WHERE YEAR = 2020;").fetchall()
#     co2_2020 = [dict(r) for r in co2_2020]
#     session.close()
#     return jsonify(co2_2020)

@app.route("/api/v1.0/top10")
def top_ten():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    top_ten = engine.execute("SELECT COUNTRY, co2_emission_in_tons FROM emissions WHERE YEAR = 2020 ORDER BY co2_emission_in_tons DESC LIMIT 10;").fetchall()
    top_ten = [dict(r) for r in top_ten]
    session.close()
    return jsonify(top_ten)

@app.route("/api/v1.0/bottom10")
def bottom_ten():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    bottom_ten = engine.execute("SELECT COUNTRY, co2_emission_in_tons FROM emissions WHERE YEAR = 2020 ORDER BY co2_emission_in_tons ASC LIMIT 10;").fetchall()
    bottom_ten = [dict(r) for r in bottom_ten]
    session.close()
    return jsonify(bottom_ten)


@app.route("/api/v1.0/geoJSON")
def geoJSON():
    with open('resources/countries.geojson', 'r') as f:
        data = json.load(f)
    return data

if __name__ == '__main__':  
    app.run(debug=True)