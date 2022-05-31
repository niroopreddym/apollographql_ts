CREATE TABLE public.dependant (
    id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    dependantname varchar(255),
    birthdate varchar(255)
);

CREATE TABLE public.enrollee (
    id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    enrolleename varchar(255),
    activationstatus boolean,
	birthdate varchar(255),
	phonenumber varchar(255)
);

CREATE TABLE public.relationship (
    enrollee_id int REFERENCES public.enrollee(id),
    dependant_id int REFERENCES public.dependant(id),
    primary key (enrollee_id, dependant_id)
);

-- CREATE OR REPLACE FUNCTION AddProductsQuantity (productid int,quantity int)
-- returns void AS
-- $body$ 
-- DECLARE
-- 	existingquantity int;
-- BEGIN
--   	 existingquantity :=(select availablequantity from public.products where id = productid);
--      update public.products set availablequantity =  quantity + existingquantity  where id = productid;
-- END;
-- $body$
-- LANGUAGE plpgsql;

-- CREATE OR REPLACE FUNCTION BookProducts (productid int,quantity int)
-- returns boolean AS
-- $body$ 
-- DECLARE
-- 	existingquantity int;
-- BEGIN
--   	 existingquantity :=(select availablequantity from public.products where id = productid);
-- 	 if existingquantity < quantity then
-- 	 	return false;
-- 	else
--     	update public.products set availablequantity =  existingquantity-quantity  where id = productid;
-- 		return true;
-- 	end if;
-- END;
-- $body$
-- LANGUAGE plpgsql;