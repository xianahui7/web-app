from flask import current_app,jsonify,request
from backend.app import create_app,db
from backend.models import Articles,articles_schema

# Create an application instance
app = create_app()

# Define a route to fetch the avaialable articles

@app.route("/articles", methods=["GET"], strict_slashes=False)
def articles():

	articles = Articles.query.all()
	results = articles_schema.dump(articles)

	return jsonify(results)


if __name__ == "__main__":
	app.run(debug=True)
 
 # We design a route that will collect the data, then serialize objects by giving them to the schema's dump method, 
 # which will provide the structured result.
 # jsonify() produces a Response object with the mimetype application/json set.

