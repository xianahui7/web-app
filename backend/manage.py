def deploy():
    """Run deployment tasks."""
    from backend.app import create_app, db
    from flask_migrate import upgrade, migrate, init, stamp
    from backend.models import Articles

    app = create_app()
    app.app_context().push()

    # create "database" replace will other database and tables
    db.create_all()

    # migrate database to latest revision !!!!!!!
    stamp()
    migrate()
    upgrade()


deploy()

# Error: Working outside of application context. May have attempted to use functionality that needed
# to interface with the current application object. To solve
# this, set up an application context with app.app_context().
