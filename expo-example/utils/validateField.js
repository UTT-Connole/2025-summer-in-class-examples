  const validateField = (fieldName: string, value: string): string | undefined => {
    switch (fieldName) {
      // case 'name':
      //   if (!value.trim()) return 'Name is required';
      //   if (value.length < 2) return 'Name must be at least 2 characters';
      //   if (value.length > 50) return 'Name must be less than 50 characters';
      //   return undefined;
      
      // case 'type':
      //   if (!value.trim()) return 'Type is required';
      //   const validTypes = ['classic', 'superhero', 'animal', 'character', 'sports', 'holiday'];
      //   if (!validTypes.includes(value.toLowerCase())) {
      //     return 'Type must be one of: classic, superhero, animal, character, sports, holiday';
      //   }
      //   return undefined;
      
      // case 'color':
      //   if (!value.trim()) return 'Color is required';
      //   const colorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^[a-zA-Z]+$/;
      //   if (!colorPattern.test(value)) {
      //     return 'Color must be a valid color name or hex code (e.g., "yellow" or "#FFD700")';
      //   }
      //   return undefined;
      
      // default:
      //   return undefined;
    }
  };

  export default validateField