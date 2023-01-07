
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
engine = create_engine("postgresql://postgres:rossygossy64@localhost:5432/C02_Emissions")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Emissions = Base.classes.emissions

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/countries<br/>"
    )

@app.route("/api/v1.0/countries")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all countries"""
    # Query all passengers
    results = session.query(Emissions.Country).distinct().all()

    session.close()

    # Convert list of tuples into normal list
    all_countries = list(np.ravel(results))

    return jsonify(all_countries)

if __name__ == '__main__':
    app.run(debug=True)




 
