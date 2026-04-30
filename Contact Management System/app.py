
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory storage
contacts = []
contact_id = 1


# Home - Display contacts + Search
@app.route('/')
def index():
    query = request.args.get('search')

    if query:
        filtered = [c for c in contacts if query.lower() in c['name'].lower()
                    or query in c['phone']
                    or query.lower() in c['email'].lower()]
        return render_template('index.html', contacts=filtered, search=query)

    return render_template('index.html', contacts=contacts, search='')


# CREATE contact
@app.route('/add', methods=['GET', 'POST'])
def add():
    global contact_id

    if request.method == 'POST':
        name = request.form['name']
        phone = request.form['phone']
        email = request.form['email']

        # Basic validation
        if name == "" or phone == "" or email == "":
            return "All fields are required!"

        contacts.append({
            "id": contact_id,
            "name": name,
            "phone": phone,
            "email": email
        })
        contact_id += 1

        return redirect(url_for('index'))

    return render_template('add.html')


# UPDATE contact
@app.route('/edit/<int:id>', methods=['GET', 'POST'])
def edit(id):
    contact = next((c for c in contacts if c['id'] == id), None)

    if request.method == 'POST':
        contact['name'] = request.form['name']
        contact['phone'] = request.form['phone']
        contact['email'] = request.form['email']

        return redirect(url_for('index'))

    return render_template('edit.html', contact=contact)


# DELETE contact
@app.route('/delete/<int:id>')
def delete(id):
    global contacts
    contacts = [c for c in contacts if c['id'] != id]
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)
