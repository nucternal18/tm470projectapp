import { UserSchema, OrganisationSchema, Role } from "Models/User";

describe("UserSchema", () => {
  it("should validate a valid user object", () => {
    const user = {
      name: "John Doe",
      email: "johndoe@example.com",
      contactNumber: "07123456789",
      imageUrl: "https://example.com/johndoe.jpg",
      postCode: "N1 1TT",
      district: "Example District",
      county: "Example County",
      organisation: "Example Organisation",
      emailVerified: true,
      isAdmin: false,
      acceptTermsAndConditions: true,
      isNewlyRegistered: false,
      role: Role.USER,
      isSuperAdmin: false,
      createdAt: "2022-01-01T00:00:00.000Z",
      updatedAt: "2022-01-01T00:00:00.000Z",
      allowsPushNotifications: false,
      pushToken: "example-push-token",
    };
    // console.log(UserSchema.safeParse(user));
    expect(UserSchema.safeParse(user).success).toBe(true);
  });

  it("should not validate an invalid user object", () => {
    const user = {
      name: "John Doe",
      email: "johndoe@example.com",
      contactNumber: "+1 123-456-7890",
      imageUrl: "https://example.com/johndoe.jpg",
      postCode: "N1 1TT",
      district: "Example District",
      county: "",
      organisation: "",
      emailVerified: true,
      isAdmin: false,
      acceptTermsAndConditions: true,
      isNewlyRegistered: false,
      role: Role.USER,
      isSuperAdmin: false,
      createdAt: "2022-01-01T00:00:00.000Z",
      updatedAt: "2022-01-01T00:00:00.000Z",
      allowsPushNotifications: true,
      pushToken: "example-push-token",
    };
    expect(UserSchema.safeParse(user).success).toBe(false);
  });
});

describe("OrganisationSchema", () => {
  it("should validate a valid organisation object", () => {
    const organisation = {
      name: "Example Organisation",
      userId: "example-user-id",
      createdAt: "2022-01-01T00:00:00.000Z",
    };
    expect(OrganisationSchema.safeParse(organisation).success).toBe(true);
  });

  it("should not validate an invalid organisation object", () => {
    const organisation = {
      name: "",
      userId: "example-user-id",
      createdAt: "2022-01-01T00:00:00.000Z",
    };
    expect(OrganisationSchema.safeParse(organisation).success).toBe(false);
  });
});
