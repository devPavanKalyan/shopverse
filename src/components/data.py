import json

def remove_keys(obj, keys_to_remove):
    if isinstance(obj, dict):
        return {k: remove_keys(v, keys_to_remove) for k, v in obj.items() if k not in keys_to_remove}
    elif isinstance(obj, list):
        return [remove_keys(item, keys_to_remove) for item in obj]
    else:
        return obj

# Replace with your actual file path
with open("C:\Users\josep\Downloads\agri_products.json", "r", encoding="utf-8") as f:
    data = json.load(f)

cleaned_data = remove_keys(data, {"id", "productId"})

# Save the output
with open("cleaned_products.json", "w", encoding="utf-8") as f:
    json.dump(cleaned_data, f, indent=2)
