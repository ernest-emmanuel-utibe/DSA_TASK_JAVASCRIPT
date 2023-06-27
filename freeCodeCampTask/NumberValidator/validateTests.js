
    // Tests that the function returns true for a valid US phone number with country code. 
    it("test_valid_us_phone_number_with_country_code", () => {
        expect(telephoneCheck("1 (555) 555-5555")).toBe(true);
    });

    // Tests that the function returns true for a valid US phone number without country code
    it("test_valid_us_phone_number_without_country_code", () => {
        expect(telephoneCheck("555-555-5555")).toBe(true);
    });

    // Tests that the function returns false for an invalid phone number with incorrect format
    it("test_invalid_phone_number_with_incorrect_format", () => {
        expect(telephoneCheck("555-5555")).toBe(false);
    });

    // Tests that the function returns false for an invalid phone number with parentheses in incorrect places
    it("test_phone_number_with_parentheses_in_incorrect_places", () => {
        expect(telephoneCheck("(555)5(55?)-5555")).toBe(false);
    });

    // Tests that the function does not handle non-US phone numbers. 
    it("test_non_us_phone_number", () => {
        expect(telephoneCheck("+44 1234 567890")).toBe(false);
    });

    
    it("test_phone_number_with_extra_spaces_or_dashes", () => {
        expect(telephoneCheck("1 555 - 555 - 5555")).toBe(true);
    });
