import { useContext, useEffect, useState } from "react";
import SmallHeader from "../ui/SmallHeader";
import { AuthContext } from "../../context/AuthContext";
import useRedirect from "../../utils/hooks/useRedirect";
import useScrollToTop from "../../utils/hooks/useScrollToTop";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

export default function Account() {
  useRedirect();
  useScrollToTop();

  const { userData, setUserData, uri, accessToken } = useContext(AuthContext);
  const { setShowPopUp } = useContext(ProductContext);
  const navigate = useNavigate();

  const [showFields, setShowFields] = useState({
    myProfile: true,
    addressBook: false,
    myPaymentOptions: false,
    myReturns: false,
    myCancellations: false,
  });

  const [dataFields, setDataFields] = useState({
    first_name: userData?.first_name || "",
    last_name: userData?.last_name || "",
    email: userData?.email || "",
    address: userData?.address || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (property, value) => {
    setDataFields((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  const handleUpdateChanges = async (e) => {
    e.preventDefault();

    if (dataFields.newPassword !== dataFields.confirmPassword) {
      setShowPopUp("New Password and Confirm Password do not match!");
      return;
    }

    try {
      const response = await fetch(`${uri}/user/${userData?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(dataFields),
        credentials: "include",
      });

      if (!response.ok) {
        const errData = await response.json();
        const errMsg = errData.error || errData.statusText();
        throw new Error(errMsg);
      }

      const data = await response.json();
      setUserData(data);
      setShowPopUp("Account Update Complete! Redirecting to Login");
      setTimeout(() => {
        navigate(0);
      }, 3000);
    } catch (error) {
      setShowPopUp(`Fetch error: ${error.message}`);
    }
  };

  return (
    <main
      className="not-found pt-20 pb-28"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="container mx-auto flex flex-col pt-10 gap-10 md:pt-0 md:gap-20">
        <SmallHeader headers={["Home", "My Account"]} />
        <section
          id="my-account"
          className="flex flex-col md:flex-row gap-5 md:gap-24 lg:gap-32"
        >
          <aside id="account-sidenav" className="flex flex-col gap-5">
            <div id="manage-account">
              <h1 className="font-semibold mb-3">Manage My Account</h1>
              <ul className="pl-5 flex flex-col gap-1 text-secondaryGray font-extralight">
                <li>My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
              </ul>
            </div>

            <div id="my-orders">
              <h1 className="font-semibold mb-3">My Orders</h1>
              <ul className="pl-5 flex flex-col gap-1 text-secondaryGray font-extralight">
                <li>My Returns</li>
                <li>My Cancellations</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold mb-3">My Wishlist</h1>
            </div>
          </aside>

          <main id="account-details" className="border border-black flex-1">
            {showFields.myProfile && (
              <div className="w-full p-5 md:py-10 md:px-16 lg:px-20">
                <h1 className="text-primaryRed text-xl font-light mb-5">
                  Edit Your Profile
                </h1>

                <form
                  onSubmit={handleUpdateChanges}
                  className="flex flex-col gap-6"
                >
                  {/* FULL NAME */}
                  <div className="full-name flex flex-col md:flex-row gap-3 flex-wrap">
                    <label
                      htmlFor="first-name"
                      className="flex flex-col gap-2 grow"
                    >
                      <span className="text-sm">First Name</span>
                      <input
                        type="text"
                        value={dataFields.first_name}
                        onChange={(e) =>
                          handleInputChange("first_name", e.target.value)
                        }
                        id="first-name"
                        className="bg-lightGray px-5 py-3 rounded-md outline-none"
                        placeholder="Ex: Ryanny"
                      />
                    </label>
                    <label
                      htmlFor="last-name"
                      className="flex flex-col gap-2 grow"
                    >
                      <span className="text-sm">Last Name</span>
                      <input
                        type="text"
                        value={dataFields.last_name}
                        onChange={(e) =>
                          handleInputChange("last_name", e.target.value)
                        }
                        id="last-name"
                        className="bg-lightGray px-5 py-3 rounded-md outline-none"
                        placeholder="Ex: Romero"
                      />
                    </label>
                  </div>

                  {/* EMAIL AND ADDRESS */}
                  <div className="email-address flex flex-col md:flex-row gap-3 flex-wrap">
                    <label htmlFor="email" className="flex flex-col gap-2 grow">
                      <span className="text-sm">Email</span>
                      <input
                        type="text"
                        value={dataFields.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        id="email"
                        className="bg-lightGray px-5 py-3 rounded-md outline-none"
                        placeholder="Ex: ryannyryanny@gmail.com"
                      />
                    </label>
                    <label
                      htmlFor="address"
                      className="flex flex-col gap-2 grow"
                    >
                      <span className="text-sm">Address</span>
                      <input
                        type="text"
                        value={dataFields.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        id="address"
                        className="bg-lightGray px-5 py-3 rounded-md outline-none"
                        placeholder="Ex:  Kingston 5246, United States"
                      />
                    </label>
                  </div>

                  <div className="password-changes">
                    <div className="flex flex-col gap-3">
                      <span className="text-sm">Password Changes</span>

                      <label htmlFor="current-password" className="relative">
                        <input
                          type="password"
                          value={dataFields.currentPassword}
                          onChange={(e) =>
                            handleInputChange("currentPassword", e.target.value)
                          }
                          id="current-password"
                          className="bg-lightGray px-5 py-3 rounded-md outline-none w-full"
                          placeholder="Current Password"
                        />
                      </label>

                      <label htmlFor="new-password" className="relative">
                        <input
                          type="password"
                          value={dataFields.newPassword}
                          onChange={(e) =>
                            handleInputChange("newPassword", e.target.value)
                          }
                          id="new-password"
                          className="bg-lightGray px-5 py-3 rounded-md outline-none w-full"
                          placeholder="New Password"
                        />
                      </label>

                      <label htmlFor="confirm-password" className="relative">
                        <input
                          type="password"
                          value={dataFields.confirmPassword}
                          onChange={(e) =>
                            handleInputChange("confirmPassword", e.target.value)
                          }
                          id="confirm-password"
                          className="bg-lightGray px-5 py-3 rounded-md outline-none w-full"
                          placeholder="Confirm Password"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="changes-buttons flex flex-col-reverse md:flex-row gap-3 md:gap-14 md:items-center md:ml-auto">
                    <button
                      type="button"
                      className="px-12 py-2 md:py-4 rounded-md text-p-red"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-12 py-2 md:py-4 bg-primaryRed text-white rounded-md h-bg-red"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
          </main>
        </section>
      </div>
    </main>
  );
}
